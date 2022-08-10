const edge = require('edge-js');
const getMetaData = (content, file_name) => {
  const libraryPath = "C:\\Users\\mauss\\Documents\\dream_code\\kriptos\\prueba-dll\\src\\SolutionItems\\";
  

  const propertyName = "KriptosClassAi"
  const input = [content, file_name, propertyName];
  const GetMetadataFromDocument = edge.func({
    assemblyFile: libraryPath + "ExtractMetadataNetFramework.dll",
    typeName: "ExtractMetadataNetFramework.MetadataHelperNF",
    methodName: "GetMetadataFromDocument"
  });

  GetMetadataFromDocument(input, (err, result) => {
    if (err) {
      console.log("library error: ", err)
    }
    console.log("result: ", result)
  });
}

export default getMetaData



// const getMetaTest = (content) => {
//   const libraryPath = "C:\\Users\\mauss\\Documents\\dream_code\\kriptos\\api-get-kriptos-meta-doc\\SolutionItems\\";

//     const edge = require('edge-js');
//     const fs = require('fs');

//     const propertyName = "KriptosClassAi"

//      const file_name = "prueba1.docx"
//      //const file_name = req.body.file_name
//      const filePath = "C:\\Users\\mauss\\Documents\\dream_code\\kriptos\\api-get-kriptos-meta-doc\\prueba1.docx"
//      const content = fs.readFileSync(filePath, {encoding: 'base64'});
// //const content = req.body.content

//      const input = [content, file_name, propertyName];
//     //  const input = [content, file_name, propertyName];

//      const GetMetadataFromDocument = edge.func({
//        assemblyFile:libraryPath+"ExtractMetadataNetFramework.dll",
//        typeName:"ExtractMetadataNetFramework.MetadataHelperNF",
//        methodName: "GetMetadataFromDocument"
//      });


//     GetMetadataFromDocument(input,function(err,result)
//    {
//      if (err){
//          console.log("library error: ", err)
//      } 
//      console.log("result: ",result)
//    });
// }


