import HistorySchema from '../module/history.schema';

class History {
  saveHistory(module, route, statusCode, moduleProcess) {
    const instanceHystory = new HistorySchema({
      module,
      route,
      statusCode,
      success: statusCode >= 200 && statusCode <= 299 ? true : false,
      moduleProcess,
      timestamp: Date.now(),
    });

    instanceHystory.save();
  }
}

export default new History();
