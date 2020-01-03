import { Component } from '@angular/core';
import * as JsonToXML from 'js2xmlparser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public AppComponent() { }

  GenerateXML(title: string, shortcut: string, description: string, author: string, snippetType: string, SQLQuery: string) {

    const jsObject = {
      Header: {
        Declarations: {
          Title: title,
          Shortcut: shortcut,
          Description: description,
          Author: author,
          SnippetType: snippetType,
        },
      },
      Snippet: {
        Code: {
          SqlQuery: SQLQuery,
        },
      },
    };

    console.log(JsonToXML.parse('SQL', jsObject));

    document.getElementById('XMLSchema').innerHTML = JsonToXML.parse('SQL', jsObject);
  }
}


