import React from 'react'
import { Link } from 'react-router-dom'
import mobile_2 from './img/mobile_2.png'
import prepaid from './img/prepaid.png'

function Dashboard() {
    return (
        <div class="container text-center">
        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          <div class="col mt-4">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={mobile_2} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
          <div class="col mt-4">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={prepaid} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
          <div class="col mt-4">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={mobile_2} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
          <div class="col mt-4">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={mobile_2} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
          <div class="col mt-4">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={mobile_2} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
          <div class="col mt-5">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={mobile_2} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
          <div class="col mt-5">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={mobile_2} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
          <div class="col mt-5">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={mobile_2} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
          <div class="col mt-5">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={mobile_2} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
          <div class="col mt-5">
          <Link to={"/portal"} href="#" class="btn">
          <img alt="" src={mobile_2} />
            <div class="p-3">Mobile Recharge</div>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Dashboard