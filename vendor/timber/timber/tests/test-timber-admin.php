<?php

use Timber\Admin;

class TestTimberAdmin extends Timber_UnitTestCase
{
    public function testAdminInit()
    {
        $admin = Admin::init();
        $this->assertTrue($admin);
    }
}
