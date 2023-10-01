export const annotations = {
  ...createPentagonAnnotation('pentagon4', 8, 228, 'rgba(233,232,232,0.4)'),
  ...createPentagonAnnotation('pentagon3', 8, 171, 'rgba(231,221,216,0.4)'),
  ...createPentagonAnnotation('pentagon2', 8, 114, 'rgba(221,208,202,0.4)'),
  ...createPentagonAnnotation('pentagon1', 8, 57, 'rgba(206,198,195,0.4)'),
};

function createPentagonAnnotation(name, sides, radius, backgroundColor) {
  return {
    [name]: {
      drawTime: 'beforeDatasetsDraw',
      type: 'polygon',
      yValue: 0,
      sides: sides,
      radius: radius,
      backgroundColor: backgroundColor,
      borderWidth: 0,
    },
  };
}