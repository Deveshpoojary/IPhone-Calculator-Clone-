        let result = '';

        function appendToResult(value) {
            result += value;
            document.getElementById('result').value = result;
        }

        function calculateResult() {
            try {
                
                result = eval(result);
                document.getElementById('result').value = result;
            } catch (error) {
                document.getElementById('result').value = 'Error';
            }
        }
        
        
        function calculatePercentage() {
    try {
        result = eval(result + '/100');
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

        function clearResult() {
            result = '';
            document.getElementById('result').value = '';
        }
function togglePositiveNegative() {
    if (result !== '' && result !== 'Error') {
        
        result = -parseFloat(result); 
        document.getElementById('result').value = result; 
    }
}