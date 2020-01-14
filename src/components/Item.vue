<template>
    <div class="container right">
      <div class="content">
        <div class="header">
            <div class="info">
                <i class="icon calendar"></i> 
                <span>22/09/2016</span>
            </div>
            <div class="info">
              <i class="icon clock"></i>  
              <span>13:57</span>
            </div>
            <div class="info">
              <i class="icon place"></i>  
              <span>Pátio Savassi</span>
            </div>
            <div class="info">
              <i class="icon money"></i>  
              <span>R$ 250,00</span>
            </div>
        </div>
        <table class="body">
            <tr>
                <th class="start">Produto</th>
                <th class="end">Preço</th>
            </tr>
            <tr>
                <td class="start">
                    Camisa Azul
                </td>
                <td class="end">
                    R$ 100,00
                </td>
            </tr>
        </table>
      </div>
    </div>
</template>

<script>
    import check from '../assets/img/icons/check.svg'
    export default {
        name: 'Item'
    }
</script>

<style lang="scss" scoped>
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background: url('../assets/img/icons/check.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 4px solid #dbdfe5;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

.right {
  left: 50%;
}

.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

.right::after {
  left: -16px;
}

.content {
  padding: 15px 0px 0px 0px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  box-shadow: 3px 4px 10px #c1c1c1;
}

.header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    font-size: 12px;
    margin-bottom: 10px;
}

.body {
    background-color: #f8f8f8;
    padding: 20px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    width: 100%;
}

.body tr th {
    font-size: 12px;
}

.body tr {
    border-bottom: 1px solid #000;
}

.body tr td {
    width: 50%;
    font-size: 12px;
}

.start {
    text-align: start;
}

.end {
    text-align: end;
}

.info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

i {
    width: 15px;
    height: 15px;
}

.calendar {
    width: 15px;
    height: 15px;
    background: url('../assets/img/icons/calendar.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: block;
}

.clock {
    width: 15px;
    height: 15px;
    background: url('../assets/img/icons/clock.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: block;
}

.money {
    width: 15px;
    height: 15px;
    background: url('../assets/img/icons/money.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: block;
}

.place {
    width: 15px;
    height: 15px;
    background: url('../assets/img/icons/place.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    display: block;
}

@media screen and (max-width: 600px) {
    .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
  
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

 .right::after {
    left: 15px;
  }
  
  .right {
    left: 0%;
  }
}
</style>