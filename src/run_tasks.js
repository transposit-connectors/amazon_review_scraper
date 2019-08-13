(params) => {
  //let newSheet = api.run("this.create_sheet", {name: `Reviews for ${env.get("url")}`});
  //api.run("this.scrape_reviews", { url: env.get("url") });
  let reviews = api.run("this.get_reviews");
  let values = [];
  for (let i = 0; i < reviews.length; i++) {
      values.push([reviews[i].rating, reviews[i].title, reviews[i].content, reviews[i].author, reviews[i].date]);
  }
  api.run('this.sheets_copy', {sheetId: '1WRfl5afcq1P7Obp1bBa5nVm0Vy0aFZ3OmLXDqVb73f4', values: values});
  return 0;//newSheet[0].spreadsheetUrl;
}
