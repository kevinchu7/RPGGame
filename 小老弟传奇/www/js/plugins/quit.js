(function()
{
    var XMJL_Scene_Title_commandGameExit = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow=function()
    {
        XMJL_Scene_Title_commandGameExit.call(this);
        this._commandWindow.setHandler('退出', this.commandGameExit.bind(this));
    };
    Scene_Title.prototype.commandGameExit=function()
    {
        SceneManager.exit();
    };
    var XMJL_Window_Title_makeCommandList=Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList=function()
    {
        XMJL_Window_Title_makeCommandList.call(this);
        this.addCommand(TextManager.gameEnd, '退出');
    };
})();