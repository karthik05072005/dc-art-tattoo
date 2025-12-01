const fs = require('fs');
const path = require('path');

// Categories to organize images into
const categories = [
  'wall-art',
  'customised',
  'hand-paintings',
  'acrylic',
  'oil',
  'watercolour',
  'all-art-material',
  'sketches',
  'blood-art',
  'pencil-sketch',
  'colour-pencil-sketch'
];

// Function to rename images in a category
function renameImagesInCategory(category) {
  const categoryPath = path.join('public', 'art', category);
  const files = fs.readdirSync(categoryPath);
  
  files.forEach((file, index) => {
    if (path.extname(file) === '.jpg') {
      const oldPath = path.join(categoryPath, file);
      const newName = `${category}-${index + 1}.jpg`;
      const newPath = path.join(categoryPath, newName);
      
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed ${file} to ${newName} in ${category}`);
    }
  });
}

// Rename images in all categories
categories.forEach(category => {
  console.log(`Processing ${category}...`);
  renameImagesInCategory(category);
});

console.log('All images renamed successfully!');