const transformGEODBData = (dataObject) => {
  const transformedResult = dataObject.map((data) => {
    return {
      country: data.country,
      city: data.city,
      coords: {
        lat: data.latitude,
        lon: data.longitude
      }
    }
  })
  console.log(transformedResult)
  return transformedResult
}

export {transformGEODBData}