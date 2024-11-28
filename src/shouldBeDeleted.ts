// вынес вызовы функции из условия
const {hasExpired, isRecurrent} = timer
const shouldBeDeleted = hasExpired() && !isRecurrent()
if (shouldBeDeleted) {
}
