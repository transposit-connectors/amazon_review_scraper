(params) => {
  let newSheet = api.run("this.create_sheet", {name: `Reviews for ${env.get("url")}`});
  //api.run("this.scrape_reviews", { url: env.get("url") });
  let reviews = api.run("this.get_reviews");
  let values = [];
  for (let i = 0; i < reviews.length; i++) {
      values.push([reviews[i].rating, reviews[i].title, reviews[i].content, reviews[i].author, reviews[i].date]);
  }
  //api.run('this.sheets_copy', {sheetId: newSheet[0].spreadsheetUrl, values: values});
  return newSheet[0].spreadsheetUrl;
}
