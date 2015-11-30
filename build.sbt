name := """playing-reactjs"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala, SbtWeb)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(jdbc, cache, ws, specs2 % Test)

libraryDependencies ++= Seq(

  "org.webjars" %% "webjars-play" % "2.4.0-1",
  "org.webjars" % "jquery" % "2.1.4",
  "org.webjars.bower" % "adminlte" % "2.3.2",
  "org.webjars" % "flat-ui" % "bcaf2de95e",

  "org.webjars.bower" % "react" % "0.14.3",
  "org.webjars.npm"   % "redux" % "3.0.4",
  "org.webjars.npm"   % "react-redux" % "4.0.0",
  "org.webjars" % "lodash" % "3.10.1"
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator


fork in run := false