 export async function sendresult (res, status, msg, data) {
    return res.status(status).json({ status, msg, data });
  };
  