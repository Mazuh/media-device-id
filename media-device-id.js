
exports.assureMediaInputId = async (label, possibleId) => {
  const devices = await navigator.mediaDevices.enumerateDevices();

  const hasAnAvailableLabel = device => device && device.label;
  const labelsAreAvailable = devices.every(hasAnAvailableLabel);

  const hasTheLabel = device => device.label && device.label == label;
  const hasTheId = device => device.deviceId == possibleId;
  const whichByIdOnly = device => hasTheId(device);
  const foundByIdOnly = devices.find(whichByIdOnly);
  const whichByIdOrLabel = device => hasTheId(device) || hasTheLabel(device);
  const foundByIdOrLabel = devices.find(whichByIdOrLabel);

  if (!foundByIdOnly && !labelsAreAvailable) {
    throw 'Could not assure device, id is wrong and labels are unavailable';
  }

  if (!foundByIdOnly && !foundByIdOrLabel) {
    throw 'Could not assure device, not found by label nor id';
  }

  return foundByIdOnly ? foundByIdOnly.deviceId : foundByIdOrLabel.deviceId;
};

