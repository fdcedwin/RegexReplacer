document.getElementById('generate-btn').addEventListener('click', () => {
    const lookup = document.getElementById('lookup').value;
    const replacement = document.getElementById('replacement').value;
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');
  
    if (!input.trim()) {
      output.value = 'Please enter some input!';
      return;
    }
  
    // Prepare the regex variable for dynamic replacement
    const regexPattern = new RegExp(lookup.replace(/[{}$]/g, ''), 'g');
    const lines = input.split('\n').filter((line) => line.trim() !== '');
  
    // Generate output
    const result = lines.map((line) => {
      return replacement.replace(regexPattern, line);
    }).join('\n');
  
    output.value = result;
  });
  