const ffi = require('ffi');

module.exports = function(xelib, types) {
    let { Void, Cardinal,  Integer,  WordBool,  Double,  Byte, PWChar,
        PCardinal, PInteger, PWordBool, PDouble, PByte } = types;

    xelib.Initialize = function(path) {
        return ffi.Library(path, {
            // META METHODS
            'InitXEdit': [Void, []],
            'CloseXEdit': [Void, []],
            'GetResultString': [WordBool, [PWChar, Integer]],
            'GetResultArray': [WordBool, [PCardinal, Integer]],
            'GetGlobal': [WordBool, [PWChar, PInteger]],
            'GetGlobals': [WordBool, [PInteger]],
            'SetSortMode': [WordBool, [Byte, WordBool]],
            'Release': [WordBool, [Cardinal]],
            'ReleaseNodes': [WordBool, [Cardinal]],
            'Switch': [WordBool, [Cardinal, Cardinal]],
            'GetDuplicateHandles': [WordBool, [Cardinal, PInteger]],
            'CleanStore': [WordBool, []],
            'ResetStore': [WordBool, []],
            // MESSAGE METHODS
            'GetMessagesLength': [Void, [PInteger]],
            'GetMessages': [WordBool, [PWChar, Integer]],
            'ClearMessages': [Void, []],
            'GetExceptionMessageLength': [Void, [PInteger]],
            'GetExceptionMessage': [WordBool, [PWChar, Integer]],
            'GetExceptionStackLength': [Void, [PInteger]],
            'GetExceptionStack': [WordBool, [PWChar, Integer]],
            // LOADING AND SET UP METHODS
            'GetGamePath': [WordBool, [Integer, PInteger]],
            'SetGamePath': [WordBool, [PWChar]],
            'SetLanguage': [WordBool, [PWChar]],
            'SetBackupPath': [WordBool, [PWChar]],
            'SetGameMode': [WordBool, [Integer]],
            'GetLoadOrder': [WordBool, [PInteger]],
            'GetActivePlugins': [WordBool, [PInteger]],
            'LoadPlugins': [WordBool, [PWChar, WordBool]],
            'LoadPlugin': [WordBool, [PWChar]],
            'LoadPluginHeader': [WordBool, [PWChar, PCardinal]],
            'BuildReferences': [WordBool, [Cardinal, WordBool]],
            'UnloadPlugin': [WordBool, [Cardinal]],
            'GetLoaderStatus': [WordBool, [PByte]],
            // ARCHIVE HANDLING METHODS
            'ExtractContainer': [WordBool, [PWChar, PWChar, WordBool]],
            'ExtractFile': [WordBool, [PWChar, PWChar, PWChar]],
            'GetContainerFiles': [WordBool, [PWChar, PInteger]],
            'GetLoadedContainers': [WordBool, [PInteger]],
            'LoadContainer': [WordBool, [PWChar]],
            // FILE HANDLING METHODS
            'AddFile': [WordBool, [PWChar, PCardinal]],
            'FileByIndex': [WordBool, [Integer, PCardinal]],
            'FileByLoadOrder': [WordBool, [Integer, PCardinal]],
            'FileByName': [WordBool, [PWChar, PCardinal]],
            'FileByAuthor': [WordBool, [PWChar, PCardinal]],
            'NukeFile': [WordBool, [Cardinal]],
            'RenameFile': [WordBool, [Cardinal, PWChar]],
            'SaveFile': [WordBool, [Cardinal, PWChar]],
            'GetRecordCount': [WordBool, [Cardinal, PInteger]],
            'GetOverrideRecordCount': [WordBool, [Cardinal, PInteger]],
            'MD5Hash': [WordBool, [Cardinal, PInteger]],
            'CRCHash': [WordBool, [Cardinal, PInteger]],
            'SortEditorIDs': [WordBool, [Cardinal, PWChar]],
            'SortNames': [WordBool, [Cardinal, PWChar]],
            'GetFileLoadOrder': [WordBool, [Cardinal, PInteger]],
            // MASTER HANDLING METHODS
            'CleanMasters': [WordBool, [Cardinal]],
            'SortMasters': [WordBool, [Cardinal]],
            'AddMaster': [WordBool, [Cardinal, PWChar]],
            'AddMasters': [WordBool, [Cardinal, PWChar]],
            'AddRequiredMasters': [WordBool, [Cardinal, Cardinal, WordBool]],
            'GetMasters': [WordBool, [Cardinal, PInteger]],
            'GetRequiredBy': [WordBool, [Cardinal, PInteger]],
            'GetMasterNames': [WordBool, [Cardinal, PInteger]],
            // ELEMENT HANDLING METHODS
            'HasElement': [WordBool, [Cardinal, PWChar, PWordBool]],
            'GetElement': [WordBool, [Cardinal, PWChar, PCardinal]],
            'AddElement': [WordBool, [Cardinal, PWChar, PCardinal]],
            'AddElementValue': [WordBool, [Cardinal, PWChar, PWChar, PCardinal]],
            'RemoveElement': [WordBool, [Cardinal, PWChar]],
            'RemoveElementOrParent': [WordBool, [Cardinal]],
            'SetElement': [WordBool, [Cardinal, Cardinal, PCardinal]],
            'GetElements': [WordBool, [Cardinal, PWChar, WordBool, PInteger]],
            'GetDefNames': [WordBool, [Cardinal, PInteger]],
            'GetAddList': [WordBool, [Cardinal, PInteger]],
            'GetContainer': [WordBool, [Cardinal, PCardinal]],
            'GetElementFile': [WordBool, [Cardinal, PCardinal]],
            'GetElementGroup': [WordBool, [Cardinal, PCardinal]],
            'GetElementRecord': [WordBool, [Cardinal, PCardinal]],
            'GetLinksTo': [WordBool, [Cardinal, PWChar, PCardinal]],
            'SetLinksTo': [WordBool, [Cardinal, PWChar, Cardinal]],
            'ElementCount': [WordBool, [Cardinal, PInteger]],
            'ElementEquals': [WordBool, [Cardinal, Cardinal, PWordBool]],
            'ElementMatches': [WordBool, [Cardinal, PWChar, PWChar, PWordBool]],
            'HasArrayItem': [WordBool, [Cardinal, PWChar, PWChar, PWChar, PWordBool]],
            'GetArrayItem': [WordBool, [Cardinal, PWChar, PWChar, PWChar, PCardinal]],
            'AddArrayItem': [WordBool, [Cardinal, PWChar, PWChar, PWChar, PCardinal]],
            'RemoveArrayItem': [WordBool, [Cardinal, PWChar, PWChar, PWChar]],
            'MoveArrayItem': [WordBool, [Cardinal, Integer]],
            'CopyElement': [WordBool, [Cardinal, Cardinal, WordBool, PCardinal]],
            'FindNextElement': [WordBool, [Cardinal, PWChar, WordBool, WordBool, PCardinal]],
            'FindPreviousElement': [WordBool, [Cardinal, PWChar, WordBool, WordBool, PCardinal]],
            'GetSignatureAllowed': [WordBool, [Cardinal, PWChar, PWordBool]],
            'GetAllowedSignatures': [WordBool, [Cardinal, PInteger]],
            'GetIsModified': [WordBool, [Cardinal, PWordBool]],
            'GetIsEditable': [WordBool, [Cardinal, PWordBool]],
            'SetIsEditable': [WordBool, [Cardinal, WordBool]],
            'GetIsRemoveable': [WordBool, [Cardinal, PWordBool]],
            'GetCanAdd': [WordBool, [Cardinal, PWordBool]],
            'SortKey': [WordBool, [Cardinal, PInteger]],
            'ElementType': [WordBool, [Cardinal, PByte]],
            'DefType': [WordBool, [Cardinal, PByte]],
            'SmashType': [WordBool, [Cardinal, PByte]],
            'ValueType': [WordBool, [Cardinal, PByte]],
            'IsSorted': [WordBool, [Cardinal, PWordBool]],
            'IsFixed': [WordBool, [Cardinal, PWordBool]],
            // ERROR CHECKING METHODS
            'CheckForErrors': [WordBool, [Cardinal]],
            'GetErrorThreadDone': [WordBool, []],
            'GetErrors': [WordBool, [PInteger]],
            'RemoveIdenticalRecords': [WordBool, [Cardinal, WordBool, WordBool]],
            // SERIALIZATION METHODS
            'ElementToJson': [WordBool, [Cardinal, PInteger]],
            'ElementFromJson': [WordBool, [Cardinal, PWChar, PWChar]],
            // ELEMENT VALUE METHODS
            'Name': [WordBool, [Cardinal, PInteger]],
            'LongName': [WordBool, [Cardinal, PInteger]],
            'DisplayName': [WordBool, [Cardinal, PInteger]],
            'Path': [WordBool, [Cardinal, WordBool, WordBool, PInteger]],
            'Signature': [WordBool, [Cardinal, PInteger]],
            'GetValue': [WordBool, [Cardinal, PWChar, PInteger]],
            'SetValue': [WordBool, [Cardinal, PWChar, PWChar]],
            'GetIntValue': [WordBool, [Cardinal, PWChar, PInteger]],
            'SetIntValue': [WordBool, [Cardinal, PWChar, Integer]],
            'GetUIntValue': [WordBool, [Cardinal, PWChar, PCardinal]],
            'SetUIntValue': [WordBool, [Cardinal, PWChar, Cardinal]],
            'GetFloatValue': [WordBool, [Cardinal, PWChar, PDouble]],
            'SetFloatValue': [WordBool, [Cardinal, PWChar, Double]],
            'GetFlag': [WordBool, [Cardinal, PWChar, PWChar, PWordBool]],
            'SetFlag': [WordBool, [Cardinal, PWChar, PWChar, WordBool]],
            'GetEnabledFlags': [WordBool, [Cardinal, PWChar, PInteger]],
            'SetEnabledFlags': [WordBool, [Cardinal, PWChar, PWChar]],
            'GetAllFlags': [WordBool, [Cardinal, PWChar, PInteger]],
            'GetEnumOptions': [WordBool, [Cardinal, PWChar, PInteger]],
            'SignatureFromName': [WordBool, [PWChar, PInteger]],
            'NameFromSignature': [WordBool, [PWChar, PInteger]],
            'GetSignatureNameMap': [WordBool, [PInteger]],
            // RECORD HANDLING METHODS
            'GetFormID': [WordBool, [Cardinal, PCardinal, WordBool]],
            'SetFormID': [WordBool, [Cardinal, Cardinal, WordBool, WordBool]],
            'GetRecord': [WordBool, [Cardinal, Cardinal, PCardinal]],
            'GetRecords': [WordBool, [Cardinal, PWChar, WordBool, PInteger]],
            'GetOverrides': [WordBool, [Cardinal, PInteger]],
            'GetReferencedBy': [WordBool, [Cardinal, PInteger]],
            'GetMasterRecord': [WordBool, [Cardinal, PCardinal]],
            'GetPreviousOverride': [WordBool, [Cardinal, Cardinal, PCardinal]],
            'GetWinningOverride': [WordBool, [Cardinal, PCardinal]],
            'FindNextRecord': [WordBool, [Cardinal, PWChar, WordBool, WordBool, PCardinal]],
            'FindPreviousRecord': [WordBool, [Cardinal, PWChar, WordBool, WordBool, PCardinal]],
            'FindValidReferences': [WordBool, [Cardinal, PWChar, PWChar, Integer, PInteger]],
            'ExchangeReferences': [WordBool, [Cardinal, Cardinal, Cardinal]],
            'IsMaster': [WordBool, [Cardinal, PWordBool]],
            'IsInjected': [WordBool, [Cardinal, PWordBool]],
            'IsOverride': [WordBool, [Cardinal, PWordBool]],
            'IsWinningOverride': [WordBool, [Cardinal, PWordBool]],
            'GetNodes': [WordBool, [Cardinal, PCardinal]],
            'GetConflictData': [WordBool, [Cardinal, Cardinal, PByte, PByte]],
            'GetNodeElements': [WordBool, [Cardinal, Cardinal, PInteger]],
            // FILTERING METHODS
            'FilterRecord': [WordBool, [Cardinal]],
            'ResetFilter': [WordBool, []],
        });
    };
};
