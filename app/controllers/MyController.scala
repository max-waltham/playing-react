package controllers

import play.api.mvc.{Action, Controller}

/**
 * Created on 2015/11/23.
 */
class MyController extends Controller {

  def index = Action {
    Ok(views.html.dashboard("New application."))
  }

}
