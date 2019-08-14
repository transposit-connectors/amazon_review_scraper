(params) => {
  // Create a new sheet to store the data
  let newSheet = api.run("this.create_sheet", {name: `Reviews for ${env.get("url")}`});
  // Scrape the reviews and get the data
  api.run("this.scrape_reviews", { url: env.get("url") });
  let reviews = api.run("this.get_reviews");
  // Populate the headers and data into a parsable array
  let values = [["Rating", "Title", "Content", "Author", "Date"]];
  for (let i = 0; i < reviews.length; i++) {
      values.push([reviews[i].rating, reviews[i].title, reviews[i].content, reviews[i].author, reviews[i].date]);
  }
  api.run('this.sheets_copy', {sheetId: newSheet[0].spreadsheetId, values: values});
  // Return the url to the spreadsheet
  return newSheet[0].spreadsheetUrl;
}
