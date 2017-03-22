const example = JSON.parse(META.metadata.response.examples[0].example);
setResponse(new HttpResponse(200, JSON.stringify(example), 'application/json'));
