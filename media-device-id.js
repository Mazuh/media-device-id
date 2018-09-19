
exports.assureMediaInputId = async (label, possibleId) => {
  const hasTheLabel = device => device.label == label;
  const hasTheId = device => device.deviceId == possibleId; 
  const isTheDevice = device => hasTheId(device) || hasTheLabel(device);
  return await navigator.mediaDevices.enumerateDevices()
    .then(devices => devices.find(isTheDevice))
    .then(found => found && found.deviceId);
};

