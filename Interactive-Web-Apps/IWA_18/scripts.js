 import { moveToColumn,createOrderHtml, html, updateDraggingHtml } from './view.js';
 import { state, createOrderData, updateDragging  } from './data.js';


/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}

let draggedItem // for order input//
let id

const handleDragStart = (event) => {
    inputItem = event.target.closest(".order");
    state.dragging.source = state.dragging.over;
    id = draggedItem.dataset.id; //this code allows to input your order into the system//
}

const handleDragEnd = (event) => {    // this code help with moving your input items to continue with the order process//
    event.preventDefault();
    const moveTo = state.dragging.over;
    moveToColumn(id, moveTo);
    updateDraggingHtml({over: null})
}


const handleHelpToggle = (event) => {     //this is the help button which allows you to get information about the system when you click it and disappear when closed//
        const dialog = document.querySelector('[data-help-overlay]');
        if(dialog.hasAttribute('open)')){
           dialog.removeAttribute('open');
        }
           else{
               dialog.setAttribute('open', true);
       }

   /* html.help.overlay.showModal()

    html.help.cancel.addEventListener("click", () => {
        html.help.overlay.close()
    })*/

}

const handleAddToggle = (event) => {     //this code allows the input item to be added using the add button//
    const dialog = document.querySelector('[data-add-overlay]');
    if(dialog.hasAttribute('open')){
        dialog.removeAttribute('open');
    }
        else{
            dialog.setAttribute('open', true);
        }
}

const handleAddSubmit = (event) => {    //this code allows the input item to be submitted using the submitt option by making sure that the data is transferred to the div in html//
        event.preventDefault();
        const data ={
            title: html.add.title.value,
            table:html.add.table.value,
            column: 'ordered'
        }
}

const props = createOrderData(data)
const content = createOrderHtml(props)
const orderedColumn = document.querySelector('[data-area="ordered"]');
const orderedDiv = orderedColumn.querySelector('[data-column="ordered"]');
orderedDiv.appendChild(content)
handleAddToggle();

const dialog = document.querySelector('[data-edit-overlay]')

const handleEditToggle = (event) => {    //this code allows the already input order easier to edit which makes it easier to cancel, edit or cancel the pop up screen and no changes had been made//
    event.preventDefault();
    if (dialog.hasAttribute('open')) {
        dialog.removeAttribute('open');
    }
    else {
        order = event.target.closest('.order')
        const orderTitle = order.querySelector('[data-order-title]').innerText
        const orderTable = order.querySelector('[data-order-table]').innerText
        const form = dialog.querySelector('[data-edit-form]')
        form.querySelector('[data-edit-title]').value = orderTitle
        form.querySelector('[data-edit-table]').value = orderTable
        dialog.setAttribute('open', true);
    }
}


const handleEditSubmit = (event) => {  //this code allows the order that has been input to be placed correctly on the required column and closes the overlay form afterwards//
    event.preventDefault();
    order.remove()
    const data = {
        title: html.edit.title.value,
        table: html.edit.table.value,
        column: html.edit.column.value
}
    const props = createOrderData(data)
    const content = createOrderHtml(props)
    const editColumn = document.querySelector(`[data-area="${data.column}"]`);
    const orderedDiv = editColumn.querySelector(`[data-column="${data.column}"]`);
    orderedDiv.appendChild(content)
    dialog.removeAttribute('open')
}

const handleDelete = (event) => {    //this code allows the  selected order to be deleted and closes the overlay form afterwards//
    const handleDelete = (event) => {
        event.preventDefault();
        order.remove()
        dialog.removeAttribute('open')
    }
}

html.add.cancel.addEventListener('click', handleAddToggle)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpToggle)
html.other.help.addEventListener('click', handleHelpToggle)

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart)
    htmlColumn.addEventListener('dragend', handleDragEnd)
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver)
}