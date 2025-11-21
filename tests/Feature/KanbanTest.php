<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class KanbanTest extends TestCase
{
    public function test_kanban_index_page_loads(): void
    {
        $response = $this->get('/kanban');
        $response->assertStatus(200);
    }

    public function test_kanban_park_ui_page_loads(): void
    {
        $response = $this->get('/kanban/park-ui');
        $response->assertStatus(200);
    }

    public function test_kanban_mantine_page_loads(): void
    {
        $response = $this->get('/kanban/mantine');
        $response->assertStatus(200);
    }

    public function test_kanban_chakra_ui_page_loads(): void
    {
        $response = $this->get('/kanban/chakra-ui');
        $response->assertStatus(200);
    }
}
