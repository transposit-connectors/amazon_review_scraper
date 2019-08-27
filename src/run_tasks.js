(params) => {
  // Create a new sheet to store the data
  let newSheet = api.query('SELECT spreadsheetId, spreadsheetUrl FROM google_sheets.create_sheet WHERE $body.properties.title=@name',
  	{name: `Reviews for ${env.get("url")}`});
  // Scrape the reviews and get the data
  api.run("this.scrape_reviews", { url: env.get("url") });
  let reviews = api.query('SELECT rating, title, content, author, date FROM apify_v2.get_items_in_task_last_run_dataset WHERE actorTaskId="wbW84AN7b8AtEFtEZ" AND status="SUCCEEDED"');
  // Populate the headers and data into a parsable array
  let values = [["Rating", "Title", "Content", "Author", "Date"]];
  for (let i = 0; i < reviews.length; i++) {
      values.push([reviews[i].rating, reviews[i].title, reviews[i].content, reviews[i].author, reviews[i].date]);
  }
  api.run('this.sheets_copy', {sheetId: newSheet[0].spreadsheetId, values: values});
  // Return the url to the spreadsheet
  return newSheet[0].spreadsheetUrl;
}
