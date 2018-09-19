
exports.assureMediaInputId = async (label, possibleId) => {
  const hasTheLabel = device => device.label == label;
  const hasTheId = device => device.deviceId == possibleId; 
  const isTheDevice = device => hasTheId(device) || hasTheLabel(device);
  const found = await navigator.mediaDevices.enumerateDevices()
    .then(devices => devices.find(isTheDevice));

  if (found) {
    return found.deviceId;
  } else {
    throw 'Could not assure device';
  }
};

