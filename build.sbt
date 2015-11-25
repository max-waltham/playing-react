name := """playing-reactjs"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SbtWeb)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(jdbc, cache, ws, evolutions, specs2 % Test)

libraryDependencies ++= Seq(
  "com.typesafe.play" %% "anorm" % "2.4.0",

  "com.typesafe.play" %% "play-slick" % "1.1.0",
  //"com.typesafe.play" %% "play-slick-evolutions" % "1.1.0",
  "mysql" % "mysql-connector-java" % "5.1.36",

  "org.webjars" %% "webjars-play" % "2.4.0-1",
  "org.webjars" % "bootstrap" % "3.1.1-2",
  "org.webjars" % "flat-ui" % "bcaf2de95e",
  "org.webjars" % "react" % "0.14.2",
  "org.webjars.npm" % "react-dom" % "0.14.2",
  "org.webjars" % "marked" % "0.3.2"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator


fork in run := true