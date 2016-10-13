%%javascript

IPython.keyboard_manager.command_shortcuts.add_shortcut('g', {
    handler : function (event) {
        var input = IPython.notebook.get_selected_cell().get_text();
        var filename = input.substring(1, input.indexOf('\n'));
        alert(filename);
        var cmd = "f = open('." + filename + ".py', 'w');f.close()";
        if (input != "") {
            cmd = '%%writefile .' + filename + '.py\n' + input;
        }
        IPython.notebook.kernel.execute(cmd);
        cmd = "import os;os.system('code ." + filename + ".py')";
        //IPython.notebook.kernel.execute(cmd);
        return false;
    }}
);

IPython.keyboard_manager.command_shortcuts.add_shortcut('u', {
    handler : function (event) {
        function handle_output(msg) {
            var ret = msg.content.text;
            IPython.notebook.get_selected_cell().set_text(ret);
        }
        var callback = {'output': handle_output};
        var input = IPython.notebook.get_selected_cell().get_text();
        var filename = input.substring(1, input.indexOf('\n'));
        var cmd = "f = open('." + filename + ".py', 'r');print(f.read())";
        IPython.notebook.kernel.execute(cmd, {iopub: callback}, {silent: false});
        return false;
    }}
);
