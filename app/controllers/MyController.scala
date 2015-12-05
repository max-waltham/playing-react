package controllers

import play.api.mvc.{Action, Controller}

/**
 * Created on 2015/11/23.
 */
class MyController extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def data(key: String) = Action {
    val r = Math.random()
    Thread.sleep(400)
    Ok(s"""{
         |  "data":[
         |    {"aaa":"$key"},
         |    {"aaa":"BBB$r"}
         |    ]
         |}""".stripMargin)
  }

}
