%%javascript
//with a cell selected, when the s key is pressed, the cell will reduce its height to just a few lines
//press the s key again to restore is normal height

IPython.keyboard_manager.command_shortcuts.add_shortcut('s', {
    handler : function (event) {
        //var input = IPython.notebook.get_selected_cell().get_text();
        //var cell = IPython.notebook.get_selected_cell();
        var selectedCell = $( ".selected" );
        if(selectedCell.height() > 50){
            selectedCell.height('50');
            selectedCell.find('.CodeMirror-scroll').height(40);
            selectedCell.find('.output_wrapper').hide();
        }
        else{
            selectedCell.height('auto');
            selectedCell.find('.CodeMirror-scroll').height('auto');
            selectedCell.find('.output_wrapper').show();
        }
        //selectedCell.height('auto');
        //alert(selectedCell.height());
        //debugger;
        return false;
    }}
);
