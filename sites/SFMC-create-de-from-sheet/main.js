  // import Handsontable from 'handsontable';
        // import 'https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css';
        // documentation : https://handsontable.com/docs/javascript-data-grid/configuration-options/#set-row-options
        // target script = https://www.ssjsdocs.xyz/contact-builder/dataextensions/create.html
        // export https://handsontable.com/docs/javascript-data-grid/export-to-csv/
        // DE data types : https://help.salesforce.com/s/articleView?id=sf.mc_es_data_extension_data_types.htm&type=5

        const container = document.querySelector('#handsomeTable');
        const hot = new Handsontable(container, {
            data: [
                ['Id', 'Text', 50, true, true, 0],
                ['NumberField', 'Number', 0, false, false, 0],
                ['DecimalField', 'Decimal', 18, false, false, 2],
                ['DateField', 'Date', 0, false, false, 0],
                ['EmailAddress', 'EmailAddress', 254, false, true, 0],
                ['MobilePhone', 'Phone', 20, false, false, 0]
            ],
            width: 'auto',
            height: 'auto',
            rowHeaders: false,
            colHeaders: ['FieldName', 'FieldType', 'Maxlength', 'IsPrimaryKey', 'IsRequired', 'Scale'],
            columns: [
                {},
                {
                    type: 'dropdown',
                    source: ['Text', 'Number', 'EmailAddress', 'Boolean', 'Date', 'Phone', 'Locale', 'Decimal']
                },
                {},
                {
                    type: 'dropdown',
                    source: ['true', 'false']
                },
                {
                    type: 'dropdown',
                    source: ['true', 'false']
                },
                {}
            ],
            licenseKey: 'non-commercial-and-evaluation', // for non-commercial use only
            // rights    
            contextMenu: true,

            layoutDirection: 'inherit',
            fixedColumnsStart: 1,
            allowRemoveRow: true,
            allowRemoveColumn: false,
            allowRemoveRow: true

        });

        // Show hide specific fields 
        // sendable options
        document.addEventListener("DOMContentLoaded", function () {
            const deSendableFieldGroup = document.getElementById("deSendableFieldGroup");
            const isSendable = document.getElementById("isSendable");

            deSendableFieldGroup.style.display = "none";

            isSendable.addEventListener("change", function () {
                if (isSendable.checked) {
                    deSendableFieldGroup.style.display = "block";
                } else {
                    deSendableFieldGroup.style.display = "none";
                }
            });

            const hasRetentionGroup = document.getElementById("hasRetentionGroup");
            const hasRetention = document.getElementById("hasRetention");

            hasRetentionGroup.style.display = "none";

            hasRetention.addEventListener("change", function () {
                if (hasRetention.checked) {
                    hasRetentionGroup.style.display = "block";
                } else {
                    hasRetentionGroup.style.display = "none";
                }
            });
        });

        // checkbox acting like radio btns 
        document.querySelector("#RowBasedRetention").addEventListener("click", function(){
        if (document.querySelector("#RowBasedRetention").checked) {
            document.querySelector("#DeleteAtEndOfRetentionPeriod").disabled = true;
            document.querySelector("#ResetRetentionPeriodOnImport").disabled = true;
        } else {
            document.querySelector("#DeleteAtEndOfRetentionPeriod").disabled = false;
            document.querySelector("#ResetRetentionPeriodOnImport").disabled = false;
        }
        });

        document.querySelector("#DeleteAtEndOfRetentionPeriod").addEventListener("click", function(){
        if (document.querySelector("#DeleteAtEndOfRetentionPeriod").checked) {
            document.querySelector("#RowBasedRetention").disabled = true;
        } else {
            document.querySelector("#RowBasedRetention").disabled = false;
        }
        });




        // retrieving data when btn clicked
        const getDataBtn = document.querySelector('#getDataBtn');
        const ssjsCreateDeTextarea = document.querySelector('#ssjsCreateDeScript');

        // ----------|| CLICK EVENT GET DATA ||----------
        getDataBtn.addEventListener('click', event => {
            // Get inputs info to prepare the script
            const getDeName = document.querySelector('#deName').value;
            const getDeFolderName = document.querySelector('#deFolderName').value;
            // setting a default folder if empty
            let folderName = '';
            getDeFolderName ? folderName = getDeFolderName : folderName = 'Data Extensions';
            console.log(`🗄 folder name ${folderName}`);            

            // adding or removing sendable settings
            let getIsSendable = document.querySelector('#isSendable');
            getIsSendable.checked ? getIsSendable = true : getIsSendable = false ; 
            const getDesendablefield = document.querySelector('#deSendableField').value;
            console.log(`🧑‍🔬 isSendable ${getIsSendable}`);
            let ssjsSendableOpt = '';
            if (getIsSendable === true) {
                const getDeSendableField = document.querySelector('#deSendableField').value;
                ssjsSendableOpt = `"SendableDataExtensionField": {"Name" : "${getDeSendableField}", "FieldType" : "Text"}, 
        "SendableSubscriberField": {"Name": "Subscriber Key"},
        "IsSendable": true,
        "IsTestable": true,`;
            }
       
            // adding or removing data retention settings
            const getHasretention = document.querySelector('#hasRetention');
            let ssjsRetention = '';
            if (getHasretention.checked) {
                const getDataRetentionPeriodLength = document.querySelector('#DataRetentionPeriodLength').value;
                const getDataRetentionPeriod = document.querySelector('#DataRetentionPeriod').value;
                let getRowBasedRetention = document.querySelector('#RowBasedRetention');
                getRowBasedRetention.checked ? rowBasedRetention = 1 : rowBasedRetention = 0 ; 
                let getResetRetentionPeriodOnImport = document.querySelector('#ResetRetentionPeriodOnImport');
                getResetRetentionPeriodOnImport.checked ? resetRetentionPeriodOnImport = 1 : resetRetentionPeriodOnImport = 0 ; 
                let getDeleteAtEndOfRetentionPeriod = document.querySelector('#DeleteAtEndOfRetentionPeriod');
                getDeleteAtEndOfRetentionPeriod.checked ? deleteAtEndOfRetentionPeriod = 1 : deleteAtEndOfRetentionPeriod = 0 ; 
                ssjsRetention = `"DataRetentionPeriodLength": ${getDataRetentionPeriodLength},
        "DataRetentionPeriod": "${getDataRetentionPeriod}",
        "RowBasedRetention": ${rowBasedRetention},
        "ResetRetentionPeriodOnImport": ${resetRetentionPeriodOnImport},
        "DeleteAtEndOfRetentionPeriod": ${deleteAtEndOfRetentionPeriod},`; 
            }


            // get all handsome table info
            const rawTableData = hot.getData();
            console.log(JSON.stringify(hot.getData()));
            // transform the list of arrays into JSON
            var json = rawTableData.map(function (field) {
                var obj = {};
                obj.Name = field[0];
                obj.FieldType = field[1];

                if (field[1] !== "Decimal") {
                    delete obj.scale;
                } else {
                    obj.Scale = field[5];
                }

                if (field[1] === "Number" || field[1] === "Date" || field[1] === "Boolean" || field[1] === "EmailAddress") {
                    delete obj.MaxLength;
                } else {
                    obj.MaxLength = field[2];
                }

                if (!field[4]) {
                    delete obj.IsRequired;
                } else {
                    obj.IsRequired = field[4];
                }

                if (!field[3]) {
                    delete obj.IsPrimaryKey;
                } else {
                    obj.IsPrimaryKey = field[3];
                }

                return obj;
            });

            console.log(json);

            const stringData = JSON.stringify(json);
            // generates the create DE SSJS script 
            const ssjsCreateDE = `&lt;script runat=&quot;server&quot;&gt;
Platform.Load("core", "1.1.1");
try {
    var api = new Script.Util.WSProxy();
    api.setClientId({"ID": Platform.Function.AuthenticatedMemberID()});
    var folderFilter = {
        LeftOperand: {
            Property: "Name",
            SimpleOperator: "equals",
            Value: "${folderName}"
        },
        LogicalOperator: "AND",
        RightOperand: {
            Property: "ContentType",
            SimpleOperator: "equals",
            Value: "dataextension"
        }
    };
    var getFolder = Folder.Retrieve(folderFilter);
    var folderId = getFolder[0].ID;
    var config = {
        "CustomerKey" : Platform.Function.GUID(),
        "Name" : "${getDeName}",
        "CategoryID": folderId,
        ${ssjsSendableOpt}
        ${ssjsRetention}
        "Fields": ${stringData}
    };
    var result = api.createItem("DataExtension", config); 
    Write(Stringify(result));
} catch(error) {
    Write(Stringify(error));
}
&lt;/script&gt;`;
            console.log(ssjsCreateDE);
            let formatedSsjsCreateDe = ssjsCreateDE
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"');
            ssjsCreateDeTextarea.value = formatedSsjsCreateDe;
        });

        // ----------|| COPY GENERATED SSJS ||----------
        document.getElementById("copySsjs").addEventListener("click", function() {
            const textarea = document.getElementById("ssjsCreateDeScript");
            textarea.select();
            document.execCommand("copy");
        });

        // ----------|| CLICK EVENT EXPORT DATA ||----------
        const exportTable = document.querySelector('#exportTable');
        const exportPlugin = hot.getPlugin('exportFile');

        exportTable.addEventListener('click', () => {
            const deNameExport = document.querySelector('#deName').value;
            const newFileName = `${deNameExport}_CSV_file_[YYYY]_[MM]_[DD]`;
            exportPlugin.downloadFile('csv', {
                bom: false,
                columnDelimiter: ',',
                columnHeaders: true,
                exportHiddenColumns: true,
                exportHiddenRows: true,
                fileExtension: 'csv',
                filename: newFileName,
                mimeType: 'text/csv',
                rowDelimiter: '\r\n',
                rowHeaders: false
            });
        });