%%javascript
//at the very first line of the cell place the a # followed by name of the cell/file like #import_from_csv
//when a cell is selected and the g key is pressed, the content of the file will be written out to a python text file
//with a name of .<cell name>.py
//the file can then be edited in a regular text editor
//when done editing, save the file in the text editor
//then to import it back into jupyter, select the cell, that has the #<cell name> at the top, and press the u key

IPython.keyboard_manager.command_shortcuts.add_shortcut('g', {
    handler : function (event) {
        var input = IPython.notebook.get_selected_cell().get_text();
        //var filename = input.substring(input.lastIndexOf('\n') + 3, input.length);
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
        //var filename = input.substring(input.lastIndexOf('\n') + 3, input.length);
        var filename = input.substring(1, input.indexOf('\n'));
        var cmd = "f = open('." + filename + ".py', 'r');print(f.read(), end='')";
        IPython.notebook.kernel.execute(cmd, {iopub: callback}, {silent: false});
        return false;
    }}
);
