import fs from "fs";

export default class MarkdownParser {
  #filePath;
  constructor(filePath) {
    this.#filePath = filePath;
  }
  replaceSectionInFile(filePath, sectionHeading, newContent) {
    // Read the file
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      // Identify the section and replace its content
      const updatedData = this.#replaceSection(
        data,
        sectionHeading,
        newContent
      );

      // Write the updated content back to the file
      fs.writeFile(filePath, updatedData, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("File successfully updated.");
        }
      });
    });
  }
  #replaceSection(data, sectionHeading, newContent) {
    const sectionRegex = new RegExp(
      `(${sectionHeading}\n)([\\s\\S]*?)(?=\n## |$)`,
      "g"
    );
    return data.replace(sectionRegex, `$1${newContent}\n`);
  }
}

function replaceSectionInFile(filePath, sectionHeading, newContent) {
  // Read the file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    // Identify the section and replace its content
    const updatedData = replaceSection(data, sectionHeading, newContent);

    // Write the updated content back to the file
    fs.writeFile(filePath, updatedData, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File successfully updated.");
      }
    });
  });
}
