package controllers

import play.api.data.Form
import play.api.data.Forms._
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
    Thread.sleep(600)
    Ok(s"""{
         |  "data":[
         |    {"aaa":"$key"},
         |    {"aaa":"BBB$r"}
         |    ]
         |}""".stripMargin)
  }

  val form = Form("text" -> text)

  def postTodo = Action { implicit request =>
    val text = form.bindFromRequest.get
    Thread.sleep(600)
    Ok(s"server answer:$text")
  }

}
