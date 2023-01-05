import { onMounted } from "vue";

const getUUID = el => el.dataset.customUUID ? el.dataset.customUUID : 'no'

const setUUID = (el, uuid) => el.dataset['customUUID'] = uuid;

const getParents = el => {
    let parentAbsolu = false
    for (var parents = []; el; el = el.parentNode) {
        if (!parentAbsolu) {
            if (el.id !== "app") {
                parents.push(getUUID(el));
            } else parentAbsolu = true
        }
    }
    return parents;
};

export const closeElement = ($, el) => {
    const uuid = Math.floor(Math.random() * 1000000000).toString();
    onMounted(() => setUUID(el.value, uuid));
    document.addEventListener('click', ({target}) => getUUID(target) === uuid || getParents(target).includes(uuid) ? null : $.value = false)
}
export const closeElementWithFunction = ($, el) => {
    const uuid = Math.floor(Math.random() * 1000000000).toString();
    onMounted(() => setUUID(el.value, uuid));
    document.addEventListener('click', ({target}) => getUUID(target) === uuid || getParents(target).includes(uuid) || !target.parentNode ? null : $(false))
}

