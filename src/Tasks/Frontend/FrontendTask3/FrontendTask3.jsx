import {createItem,sortedByOrder} from "../../../utils/createItem.js";
import './FrontendTask3.sass'

const data = {
    layout5: {
        '0': '45%',
        '1': '50%',
        '2': '60%',
        '3': '25%',
        '4': '30%',
    },
    // layout8: [
    //     {'0': '45%', order: 1},
    //     {'1': '60%', order: 5},
    //     {'2': '50%', order: 8},
    //     {'3': '20%', order: 2},
    //     {'4': '20%', order: 6},
    //     {'5': '30%', order: 9},
    //     {'6': '25%', order: 3},
    //     {'7': '15%', order: 7},
    //     {'8': '25%', order: 10},
    //     {'9': '25%', order: 4},
    //
    // ]
    layout8: [
        {height: '30%', order: 1, place: 1},
        {height: '40%', order: 5, place: 2},
        {height: '35%', order: 8, place: 3},
        {height: '18%', order: 2, place: 4},
        {height: '18%', order: 6, place: 5},
        {height: '25%', order: 9, place: 6},
        {height: '20%', order: 3, place: 7},
        {height: '15%', order: 7, place: 8},
        {height: '25%', order: 10, place: 9},
        {height: '20%', order: 4, place: 10},

    ]
}
export const FrontendTask3 = () => {
    return <main >
        <section className="flex-wrapper">
            <h2>Flex</h2>
            <div className="flex-wrapper__layout1 wrapper-block">
                {createItem(5).map((el) =>
                    <div key={el} className="flex-wrapper__layout1-item item"></div>
                )}
            </div>
            <div className="flex-wrapper__layout2 wrapper-block ">
                {createItem(3).map((el) =>
                    <div key={el} className="flex-wrapper__layout2-item item"></div>
                )}
            </div>
            <div className="flex-wrapper__layout3 wrapper-block ">
                {createItem(5).map((el) =>
                    <div key={el} className="flex-wrapper__layout3-item item"></div>
                )}
            </div>
            <div className="flex-wrapper__layout4 wrapper-block ">
                {createItem(9).map((el) =>
                    <div key={el} className="flex-wrapper__layout4-item item"></div>
                )}
            </div>
            <div className="flex-wrapper__layout5 wrapper-block ">
                {createItem(5).map((el) =>
                    <div key={el} className="flex-wrapper__layout5-item item" style={{height: data.layout5[el]}}></div>
                )}
            </div>
            <div className="flex-wrapper__layout6 wrapper-block ">
                {createItem(5).map((el) =>
                    <div key={el} className="flex-wrapper__layout6-item item" style={{width: data.layout5[el]}}></div>
                )}
            </div>
            <div className="flex-wrapper__layout7 wrapper-block ">
                {createItem(5).map((el) =>
                    <div key={el} className="flex-wrapper__layout7-item item"></div>
                )}
            </div>

            <div className="flex-wrapper__layout8 wrapper-block ">
                {data.layout8.toSorted(sortedByOrder).map((el) =>
                    <div key={el.order} className="flex-wrapper__layout8-item item"
                         style={{height: el.height}}>{el.place}</div>
                )}
            </div>


        </section>
        <section className="grid-wrapper">
            <h2>Grid</h2>
            <div className="grid-wrapper__layout1 wrapper-block">
                {createItem(5).map((el) =>
                    <div key={el} className="item"></div>
                )}
            </div>
            <div className="grid-wrapper__layout2 wrapper-block">
                {createItem(3).map((el) =>
                    <div key={el} className="item"></div>
                )}
            </div>
            <div className="grid-wrapper__layout3 wrapper-block">
                {createItem(5).map((el) =>
                    <div key={el} className="grid-wrapper__layout3-item item"></div>
                )}
            </div>
            <div className="grid-wrapper__layout4 wrapper-block">
                {createItem(9).map((el) =>
                    <div key={el} className="grid-wrapper__layout4-item item"></div>
                )}
            </div>
            <div className="grid-wrapper__layout5 wrapper-block">
                {createItem(5).map((el) =>
                    <div key={el} className="item" style={{height: data.layout5[el]}}></div>
                )}
            </div>
            <div className="grid-wrapper__layout6 wrapper-block">
                {createItem(5).map((el) =>
                    <div key={el} className="item" style={{width: data.layout5[el]}}></div>
                )}
            </div>
            <div className="grid-wrapper__layout7 wrapper-block">
                {createItem(5).map((el) =>
                    <div key={el} className="item"></div>
                )}
            </div>
            <div className="grid-wrapper__layout8 wrapper-block">
                {data.layout8.map((el) =>
                    <div key={el.place} className="grid-wrapper__layout8-item item">{el.place}</div>
                )}
            </div>
            <div className="grid-wrapper__layout9 wrapper-block">
                {createItem(4).map((el) =>
                    <div key={el.place} className="grid-wrapper__layout9-item item"></div>
                )}
            </div>
            <div className="grid-wrapper__layout10 wrapper-block">
                {createItem(5).map((el) =>
                    <div key={el.place} className="grid-wrapper__layout10-item item"></div>
                )}
            </div>
            <div className="grid-wrapper__layout11 wrapper-block">
                <header className='grid-wrapper__layout11-header item'>header</header>
                <div className='grid-wrapper__layout11-sidebar item'>Sidebar</div>
                <div className='grid-wrapper__layout11-content item'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                <div className='grid-wrapper__layout11-sidebar2 item'>Sidebar2</div>
                <footer className='grid-wrapper__layout11-footer item'>footer</footer>
            </div>
        </section>

    </main>
}