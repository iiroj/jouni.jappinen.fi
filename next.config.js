module.exports = {
  target: "server",
  exportPathMap: async () => ({
    "/": { page: "/" },
    "/ikuiset-seprat": { page: "/ikuiset-seprat" },
    "/pajan-hamarasta": { page: "/pajan-hamarasta" },
    "/rautakymi": { page: "/rautakymi" }
  })
};
