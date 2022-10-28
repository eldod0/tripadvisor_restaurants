<svelte:head>
	<title>Inscription Restaurant</title>
	<meta name="description" content="Inscription d'un restaurant" />
</svelte:head>

<setion>
    <h1>
        Inscription d'un restaurant
    </h1>
    <div class="form_div">
        <form method="POST" action="?/submit_rest">
            <div class="pair">
                <label for="rest_name">Nom du restaurant</label><br>
                <input name="rest_name" type="text" placeholder="nom du restaurant" required/>
            </div>
            <div class="pair">
                <label for="rest_address">Adresse du restaurant</label><br>
                <input name="rest_address" type="text" placeholder="adresse du restaurant" required/>
            </div>
            <div class="pair">
                <label for="rest_description">Description du restaurant</label><br>
                <textarea name="rest_description" placeholder="description du restaurant" rows="10" cols="100"/>
            </div>
            <button>Soumettre</button>
        </form>
    </div>
</setion>

<style>
    div.form_div{
        display: block;
        justify-content: center;
        padding: 3%;
        border-radius: 15px;
        background-color: white;
        border-style: solid;
        border-width: 3px;
        border-color: black;
    }

    form{
        display: inline-block;
        width: max-content;
        place-items: center;
    }

    div.pair{
        margin-top: 5%;
        margin-left: 10em;
        margin-bottom: 12%;
    }

    div.pair label{
        display: inline-block;
        padding-bottom: 5px;
        color: black;
    }

    form input{
        display: inline-block;
        border-radius: 5px;
        border-width: 2px;
        padding: 2%;
        width: 30em;
    }

    form textarea{
        display: inline-block;
        border-radius: 5px;
        border-width: 2px;
        padding: 2%;
        width: 30em;
    }

    form button{
        padding: 2%;
        border-radius: 5em;
        border-width: 2px;
        background-color: white;
        margin: 0 auto;
        /*margin-left: 50%;*/
        display: block;
        text-align: center;
        align-content: center;
        transition: 0.3s;
    }

    button:hover{
        background-color: black;
        color: white;
    }
</style>