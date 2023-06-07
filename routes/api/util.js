 function mapResult(result) {
    const json = JSON.parse(JSON.stringify(result));
    console.log(json);
    return json;
};

exports.mapResult = mapResult