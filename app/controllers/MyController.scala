package controllers

import play.api.data.Form
import play.api.data.Forms._
import play.api.mvc.{Action, Controller}

/**
 * Created on 2015/11/23.
 */
class MyController extends Controller {

  def index(path: String ) = Action {request =>
    request.session.get("auth").map { name =>
      Ok(views.html.index()).withSession(
        "auth" -> name)
    }.getOrElse {
      Ok(views.html.index())
    }

  }
  val loginForm = Form("user" -> text)
  def login = Action { implicit request =>
    val text = loginForm.bindFromRequest.get
    Ok(views.html.index()).withSession(
      "auth" -> "ok@example.com",
      "user" -> text
    )
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
