


export const JsTask9 = () => {

    // 1
    const arr1 = [1, 2, 3]
    function checkIsArray(arr){
        console.log(`1. массив [${arr}]`, Array.isArray(arr) ? 'является массивом' : 'не является массивом')
        //Array.isArray() return boolean
    }
    checkIsArray(arr1)

    // 2
    const arrayA = [1, 2, 3]
    const arrayB = [4, 5, 6]
    function mergeArray(arr1, arr2) {
        const resultSpread = [...arr1,...arr2] //вкладывает массивы в новый массив, не изменяя исходные
        const resultConcat = arr1.concat(arr2) // возвращает новый массив объединяя, но не изменяя исходные
        console.log(`2. объединение массивов [${arr1}] и [${arr2}] с concat`,resultConcat)
    }
    mergeArray(arrayA,arrayB)

    // 3
    const mixArray1 = [1, 2, 'apple']
    const mixArray2 = ['pineapple', 'orange', 'apple']
    function checkStringInArray(arr1,arr2) {
        const currentArray = [...arr1, ...arr2]
        for(let el of currentArray) {
            if(typeof el !== 'string'){
                return console.log(`3. в массивах [${arr1}], [${arr2}] не все элементы являются строками!`)
            }
        }
        return console.log(`3. в массивах [${arr1}], [${arr2}] только строки`)
    }
    function checkStringInArrayWithEvery(arr1,arr2){
        const currentArray = [...arr1, ...arr2]
        if(!currentArray.length){
            return 'предоставлены пустые массивы'
        } else{
            return currentArray.every((el) => typeof el === 'string')
        }


    }
    checkStringInArray(mixArray1, mixArray2)
    console.log('с помощью every',checkStringInArrayWithEvery(mixArray1, mixArray2))

    // 4
    const array4 = [{}, 1, 2, 'apple']
    function findNumberInArray(arr){
        const res = arr.some(el => Number.isFinite(el)) // return boolean
        console.log(`4. в массиве ${res ? 'есть хотя бы одно число' : 'нет чисел'}` )
    }
    findNumberInArray(array4)

    // 5
    function createArrayWithString(){
        return Array(10).fill('orange') //модифицирует массив
    }
    console.log(createArrayWithString())

    //6
    const startArray = [{type: 'content', id: 23}, {type: 'decor', id: 43}, {type: 'content', id: 13}]
    function operationsWithArray(array){
        const arrayWithContent = array.map(el => {
            return {...el, type: 'content'}
        }) //новый массив
        console.log('i.', arrayWithContent)

        const findElementById = array.find(el => el.id === 43) //возвращает первое найденное значение
        console.log('ii', findElementById)
        const findIndexById = array.findIndex(el => el.id === 43) //возвращает индекс первого найденного значения
        console.log('iii, индекс равняется ', findIndexById)
        const typesArray = [...new Set(array.map(item => item.type))];
        console.log('iV, массив уникальных типов', typesArray)
        const idArray = array.map(item => item.id)
        console.log('V, массив всех id', idArray)
    }
    operationsWithArray(startArray)

    // 7
    const hardArray = [[1, 2, [3, 5, 6]], [2, [6]], 0]
    const getSomething = (array) => {
        let resultArray = [];
        const isArray = Array.isArray;
        for (let item of array) {
            isArray(item)
                ? (resultArray = resultArray.concat(getSomething(item)))
                : resultArray.push(item);
        }
        return resultArray;
    };
    console.log('7',getSomething(hardArray));
    console.log('используя flat и бесконечность',hardArray.flat(Infinity)) //возвращает новый массив
    console.log('если не важен тип данныъ',hardArray.toString().split(',')) //возвращает новый массив со строками
    console.log('если не важен тип данныъ',hardArray.toString().split(',')) //возвращает новый массив со строками
    console.log('если не важен тип данныъ',hardArray.toString().split(',')) //возвращает новый массив со строками console.log('если не важен тип данныъ',hardArray.toString().split(',')) //возвращает новый массив со строками


    // 8
    const unSortedArray = [3, 4, 14, 1, 2, 34, 7]
    function sortingNumbersArray(array){
        return array.sort((a,b) => a - b) //мутирует исходный массив
    }
    console.log('8.',sortingNumbersArray((unSortedArray)))

    // 9
    const arrayFruits = ['apple', 'orange']
    function getArrayFillLetters(array){
        return array.flatMap(el => [...el]) //новый плоский массив
    }

    console.log('9.', getArrayFillLetters(arrayFruits))

    // 10
    const arrayLetters = ['pr', 't', 'type'];
    function getString(arr){
        for(let i in arr){
            if(i < 2){
                arr[i] = arr[i] + 'о'
            }
        }
        return arr.join('')
    }
    console.log('10,',getString(arrayLetters)); // 'prototype'

    // 11
    const testArray = [10, 100]
    function reverseArray(array){
        const notMutate = array.slice().reverse() //новый массив с копией исходного
        const mutate = array.reverse()
        console.log('не мутате',notMutate )
        return mutate
    }
    console.log('11. ', reverseArray(testArray))

    // 12
    const arrayStrings = ['discount', 'select', 'active']
    function findWordInArray(array) {
        return array.includes('discount') //return boolean
    }
    console.log('12.', findWordInArray((arrayStrings)))

    // 13
    const getNewObject = (arr) => {
        const list = {};
        arr.map(el => {
            list[el] = el
        })
        return list;
    };
    console.log('13. ',getNewObject(arrayStrings))

    // 14
    const exampleArray = [1, 2, 3, "hello world", 4.12, true]
    function getCopySliceArray(array, number){
        return array.slice(0,number)
    }
    console.log('14. ',getCopySliceArray(exampleArray, 3))

    // 15
    function replacementArray(array){
        array.splice(1,2,'discount', 'select', 'active') // возвращает массив удаленных элементов
        return array
    }
    console.log('15.', replacementArray(exampleArray))

    return <div>
        9
    </div>

    // Метод at() экземпляров массива принимает целое значение и возвращает элемент по этому индексу,
    // причем допускаются положительные и отрицательные целые числа. Отрицательные целые числа отсчитываются от последнего элемента в массиве. array.at(index) (-1 послденийб -2 предпоследний)

    // Метод with() экземпляров массива - это копирование нотации скобок для изменения значения заданного индекса.
    // Он возвращает новый массив, в котором элемент с заданным индексом заменен заданным значением. arr.with(2, 6) - элемент под индексом 2 будет равен 6

    // Метод findLast() экземпляров Array выполняет итерацию массива в обратном порядке и возвращает значение первого элемента,
    // удовлетворяющего заданной функции проверки. Если ни один элемент не удовлетворяет функции проверки, возвращается значение undefined. как find только с конца

    // findLastIndex() как findIndex() только начинает с конца return 1 или -1

    // Метод toSorted() экземпляров Array является копирующей версией метода sort(). Он возвращает новый массив с элементами, отсортированными в порядке возрастания.
    // Метод toSpliced() экземпляров массива является копирующей версией метода splice(). Он возвращает новый массив с некоторыми элементами, удаленными и/или замененными по заданному индексу.
    // Метод toReversed() экземпляров Array - это копирующий аналог метода reverse(). Он возвращает новый массив с элементами в обратном порядке.
}