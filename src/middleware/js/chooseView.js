const views = {
  choose(url, games) {
    return games.find((obj) => {
      return obj.name === url;
    });
  },
};

module.exports = views;
