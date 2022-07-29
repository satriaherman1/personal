import callApi from "@src/helper/callApi";

class FeedbackService {
  getFeedbacks() {
    return callApi.get("/feedbacks?populate=*");
  }
}

export default FeedbackService;
