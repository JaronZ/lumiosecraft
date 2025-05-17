import org.slf4j.event.Level
import kotlin.io.path.Path
import kotlin.io.path.listDirectoryEntries

plugins {
    id("java-library")
    id("idea")
    id("net.neoforged.moddev") version "2.0.78"
}

// gradle.properties
val neoVersion: String by extra
val parchmentMinecraftVersion: String by extra
val parchmentMappingsVersion: String by extra

tasks.named<Wrapper>("wrapper").configure {
    distributionType = Wrapper.DistributionType.BIN
}

version = "1.0.0"
group = "dev.jaronline.modpack-environment"

repositories {
    mavenLocal()
}

java.toolchain.languageVersion = JavaLanguageVersion.of(21)

neoForge {
    version = neoVersion

    parchment {
        mappingsVersion = parchmentMappingsVersion
        minecraftVersion = parchmentMinecraftVersion
    }

    runs {
        create("client") {
            client()
            gameDirectory = file("run/client")
        }

        create("server") {
            server()
            gameDirectory = file("run/server")
            programArgument("--nogui")
        }

        configureEach {
            systemProperty("forge.logging.markers", "REGISTRIES")

            jvmArguments.addAll(
                listOf(
                    "-Dmixin.env.disableRefMap=true",
                    "-Dmixin.debug.verbose=false",
                    "-Dmixin.checks.interfaces=false"
                )
            )

            logLevel = Level.INFO
        }
    }
}

tasks.register<Delete>("cleanInstallable") {
    delete(
        fileTree("client"),
        fileTree("libs"),
        fileTree("kubejs"),
        fileTree("server"),
        "client",
        "libs",
        "kubejs",
        "server"
    )
}

tasks.register<Delete>("cleanClientMods") {
    delete(fileTree("run/client/mods"))
}

tasks.register<Delete>("cleanServerMods") {
    delete(fileTree("run/server/mods"))
}

tasks.register<Delete>("cleanClientKubeJS") {
    delete(fileTree("run/client/kubejs"))
}

tasks.register<Delete>("cleanServerKubeJS") {
    delete(fileTree("run/server/kubejs"))
}

tasks.register<Delete>("cleanClientMisc") {
    delete(
        fileTree("run/client/config"),
        fileTree("run/client/defaultconfigs"),
        fileTree("run/client/downloads"),
        fileTree("run/client/logs"),
        fileTree("run/client/resourcepacks"),
        fileTree("run/client/shaderpacks")
    )
}

tasks.register<Delete>("cleanServerMisc") {
    delete(
        fileTree("run/server/config"),
        fileTree("run/server/defaultconfigs"),
        fileTree("run/server/logs"),
        fileTree("run/server/resourcepacks"),
        fileTree("run/server/shaderpacks")
    )
}

tasks.register<Copy>("prepareClientMods") {
    dependsOn("cleanClientMods")
    from(fileTree("libs")) {
        include("*.jar")
    }
    from(fileTree("libs/client")) {
        include("*.jar")
    }
    into(file("run/client/mods"))
}

tasks.register<Copy>("prepareServerMods") {
    dependsOn("cleanServerMods")
    from(fileTree("libs")) {
        include("*.jar")
    }
    from(fileTree("libs/server")) {
        include("*.jar")
    }
    into(file("run/server/mods"))
}

tasks.register<Copy>("prepareClientKubeJS") {
    dependsOn("cleanClientKubeJS")
    from(fileTree("kubejs")) {
        include("startup_scripts/**/*.js")
        include("client_scripts/**/*.js")
        include("server_scripts/**/*.js")
        include("assets/**/*")
        include("config/**/*")
        include("data/**/*")
    }
    into(file("run/client/kubejs"))
}

tasks.register<Copy>("prepareServerKubeJS") {
    dependsOn("cleanServerKubeJS")
    from(fileTree("kubejs")) {
        include("startup_scripts/**/*.js")
        include("server_scripts/**/*.js")
        include("assets/**/*")
        include("config/**/*")
        include("data/**/*")
    }
    into(file("run/server/kubejs"))
}

tasks.register<Copy>("prepareClientMisc") {
    dependsOn("cleanClientMisc")
    from(fileTree("client")) {
        include("config/**/*")
        include("defaultconfigs/**/*")
        include("resourcepacks/**/*")
        include("shaderpacks/**/*")
    }
    into(file("run/client"))
}

tasks.register<Copy>("prepareServerMisc") {
    dependsOn("cleanServerMisc")
    from(fileTree("server")) {
        include("config/**/*")
        include("defaultconfigs/**/*")
        include("resourcepacks/**/*")
        include("shaderpacks/**/*")
    }
    into(file("run/server"))
}

tasks.named("runClient").configure {
    dependsOn("prepareClientMods")
    dependsOn("prepareClientKubeJS")
    dependsOn("prepareClientMisc")
}

tasks.named("runServer").configure {
    dependsOn("prepareServerMods")
    dependsOn("prepareServerKubeJS")
    dependsOn("prepareServerMisc")
}

tasks.named("clean").configure {
    dependsOn("cleanInstallable")
}

tasks.withType<JavaCompile>().configureEach {
    options.encoding = "UTF-8"
}
