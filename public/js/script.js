let addIngredientsBtn = document.getElementById('addIngredientsBtn');
let ingredientList = document.querySelector('.ingredientList');
let ingredientDiv = document.querySelectorAll('.ingredientDiv')[0];

addIngredientsBtn.addEventListener('click', function(){
    let newIngredients = ingredientDiv.cloneNode(true);
    let input = newIngredients.getElementsByTagName('input')[0];
    input.value = '';
    ingredientList.appendChild(newIngredients);
});



/**
<!-- ingredients -->
<div class="col-12">
    <label for="ingredients" class="form-label">Ingredients</label>
    <small>Example: Ice</small>
    <div class="ingredientList">
        <div class="ingredientDiv mb-1">
            <input type="text" name="ingredients" class="form-control">
        </div>
    </div>  
</div>

<div class="col-12">
    <button type="button" class="btn btn-outline-primary" id="addIngredientsBtn">+ Ingredients</button>
</div>
 */