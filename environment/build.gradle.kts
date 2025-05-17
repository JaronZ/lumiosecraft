import kotlin.io.path.Path
import kotlin.io.path.listDirectoryEntries

plugins {
    id("java-library")
    id("idea")
    id("net.neoforged.moddev") version "2.0.78"
}

tasks.named<Wrapper>("wrapper").configure {
    distributionType = Wrapper.DistributionType.BIN
}

version = property("mod_version")!!
group = property("mod_group_id")!!

repositories {
    mavenLocal()
}

base {
    archivesName = property("mod_id")!! as String
}

java.toolchain.languageVersion = JavaLanguageVersion.of(21)

neoForge {
    version = project.property("neo_version")!! as String

    parchment {
        mappingsVersion = project.property("parchment_mappings_version")!! as String
        minecraftVersion = project.property("parchment_minecraft_version")!! as String
    }

    runs {
        create("client") {
            client()

            gameDirectory = file("run/client")

            systemProperty("neoforge.enabledGameTestNamespaces", project.property("mod_id")!! as String)
        }

        create("server") {
            server()

            gameDirectory = file("run/server")

            programArgument("--nogui")
            systemProperty("neoforge.enabledGameTestNamespaces", project.property("mod_id")!! as String)
        }

        configureEach {
            systemProperty("forge.logging.markers", "REGISTRIES")
            logLevel = org.slf4j.event.Level.DEBUG
        }
    }

    mods {
        create(project.property("mod_id")!! as String) {
            sourceSet(sourceSets.main.get())
        }
    }
}

sourceSets.main.get().resources {
    srcDir("src/generated/resources")
}

configurations {
    runtimeClasspath.get().extendsFrom(create("localRuntime"))
}

dependencies {
    Path("libs").listDirectoryEntries("*.jar").forEach {
        implementation(files(it))
    }
}

var generatedModMetadata = tasks.register<ProcessResources>("generateModMetadata") {
    var replaceProperties = mapOf(
        "minecraft_version" to project.property("minecraft_version"),
        "minecraft_version_range" to project.property("minecraft_version_range"),
        "neo_version" to project.property("neo_version"),
        "neo_version_range" to project.property("neo_version_range"),
        "loader_version_range" to project.property("loader_version_range"),
        "mod_id" to project.property("mod_id"),
        "mod_name" to project.property("mod_name"),
        "mod_license" to project.property("mod_license"),
        "mod_version" to project.property("mod_version"),
        "mod_authors" to project.property("mod_authors"),
        "mod_description" to project.property("mod_description"),
    )
    inputs.properties(replaceProperties)
    expand(replaceProperties)
    from("src/main/templates")
    into("build/generated/sources/modMetadata")
}

sourceSets.main.get().resources.srcDir(generatedModMetadata)
neoForge.ideSyncTask(generatedModMetadata)

tasks.withType<JavaCompile>().configureEach {
    options.encoding = "UTF-8"
}
