import callApi from "@src/helper/callApi";

class PortfolioService {
  getPortfolios() {
    return callApi.get("/portfolios?populate=*");
  }
  getPortfolio(id: any) {
    return callApi.get(`/portfolios/${id}?populate=*`);
  }
}

export default PortfolioService;
