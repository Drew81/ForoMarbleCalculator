function calculate() {
				var mat = document.getElementById("mat").value;
				var sq = document.getElementById("sq").value;
				var ed = document.getElementById("ed").value;
				var lin = document.getElementById("lin").value;
				var install = document.getElementById("install").value;

				var matCost = (parseFloat(mat)*parseFloat(sq))+(parseFloat(lin)*parseFloat(ed));
				var installCost = parseFloat(install)*parseFloat(sq);
				var result = matCost + installCost;
				if(!isNaN(result))
				{
					document.getElementById("answer").innerHTML = "$ " + (new Intl.NumberFormat('en-IN').format(result.toFixed(3)));
				}

				var result2 = parseFloat(sq);
				if(!isNaN(result2))
				{
					document.getElementById("answer2").innerHTML = "Square footage: " + result2.toFixed(2)+" Ft";
				}
			}

			function calculateMat(){
				var material = document.getElementById("mat").value;
				document.getElementById("total").innerHTML = material;	
			}

			function calculateEd() {
				var edge = document.getElementById("ed").value;
				document.getElementById("totEdge").innerHTML = edge;
			}

			function show() {
				var square = document.getElementById("sq").value;
				var mat = document.getElementById("mat").value;

				var sum = parseFloat(square)*parseFloat(mat);
				if(!isNaN(sum))
				{
					document.getElementById("total").innerHTML = "$ " + (new Intl.NumberFormat('en-IN').format(sum.toFixed(2)));
				}			
			}

			function show2() {
				var ed = document.getElementById("ed").value;
				var lin = document.getElementById("lin").value;

				var total = parseFloat(ed)*parseFloat(lin);
				if(!isNaN(total))
				{
					document.getElementById("totEdge").innerHTML = "$ " + total;
				}
			}



			function total() {
				var totalSum = calculateMat()+calculateEd();
				if(!isNaN(totalSum))
				{
					document.getElementById("answer").innerHTML = totalSum;
				}
			}