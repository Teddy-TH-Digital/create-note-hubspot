try {

  var options = {
  'method': 'POST',
  'url': 'https://api.hubapi.com/engagements/v1/engagements',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+process.env.YOURPRIVATEAPPTOKEN
  },
  body: JSON.stringify({
    "engagement": {
      "active": true,
      "ownerId": YOUROWNERID,
      "type": "NOTE",
      "timestamp": SETATIMESTAMP
    },
    "associations": {
      "dealIds": [
        event.inputFields['hs_object_id']
      ]
    },
    "metadata": {
      "body": "THE BODY OF YOUR NOTE"
    }
  })

};
