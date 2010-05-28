(function () {
  var did_already = false; ///WTF ? 2.0 fires load multiple times ? Listening to the wrong event ?
  function on_load() {
    if (did_already) return;
    did_already = true;

    var prefs = Components.classes["@mozilla.org/preferences-service;1"]
      .getService(Components.interfaces.nsIPrefService)
      .getBranch("tblatex.");
    var convert_path = prefs.getCharPref("convert_path");
    if ((prefs.getIntPref("firstrun") == 1 && !(convert_path.toLowerCase().indexOf("system32\\convert.exe") >= 0 && navigator.platform == "Win32"))
        || prefs.getIntPref("firstrun") == 2)
      return;

    var tabmail = document.getElementById("tabmail");
    if (tabmail && 'openTab' in tabmail) /* Took this from Personas code ("Browse gallery"...) */
      Components.classes['@mozilla.org/appshell/window-mediator;1'].
      getService(Components.interfaces.nsIWindowMediator).
      getMostRecentWindow("mail:3pane").
      document.getElementById("tabmail").
      openTab("contentTab", { contentPage: "chrome://tblatex/content/firstrun.html" });
    else
      openDialog("chrome://tblatex/content/firstrun.html", "", "width=640,height=480");
  };
  window.addEventListener("load", on_load, true);
})();