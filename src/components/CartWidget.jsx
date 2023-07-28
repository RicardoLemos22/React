
export const CartWidget = ({numero}) => {
    return (
        <>
        {
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="#">
            <i class="fas fa-shopping-bag fa-lg"></i>
            <span class="badge badge-pill badge-danger">{numero}</span>
            </a>
        </li>
        </ul>
        }
      </>
      )
}
