import './header.css';
import Item from '../item';

function Body(){

    return(

        <div class="app">

        <button>ADD NEW EXPENSE</button>

        <div class="body">

            <div class="head">
                <p>Filter by year</p>

                <select id="cars" onchange="myFunction()">
                    <option value=""></option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
            </div>

            <div class="statistic">

                <div class="item">
                    <div class="child"></div>
                </div>
                <div class="item"></div>
                <div class="item"></div>

            </div>

            <div class="list">

                <Item time = '2022' content = 'phaDo' price = '400' />

            </div>

        </div>


    </div>

    );
}

export default Body;