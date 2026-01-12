{{-- resources/views/cms/pillars/index.blade.php --}}
@extends('layouts.cms') {{-- pas aan naar jouw layout --}}
@section('content')

<div class="container">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <div>
            <h1>Pijlers</h1>
            <p style="margin:0; color:#666;">Overzicht + beheren</p>
        </div>

        <a href="{{ route('cms.pillars.create') }}" class="btn btn-primary">
            + Nieuwe pijler
        </a>
    </div>

    @if(session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif

    <div style="overflow-x:auto;">
        <table class="table table-striped align-middle">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Naam</th>
                    <th>Slug</th>
                    <th>Beschrijving</th>
                    <th>Kleur</th>
                    <th>Needed value</th>
                    <th style="text-align:right;">Acties</th>
                </tr>
            </thead>

            <tbody>
                @forelse($pillars as $pillar)
                    <tr>
                        <td>{{ $pillar->id }}</td>
                        <td><strong>{{ $pillar->name }}</strong></td>
                        <td>{{ $pillar->slug }}</td>
                        <td style="max-width:420px;">
                            <span title="{{ $pillar->description }}">
                                {{ \Illuminate\Support\Str::limit($pillar->description, 80) }}
                            </span>
                        </td>

                        <td>
                            <div style="display:flex; align-items:center; gap:8px;">
                                <span style="width:16px; height:16px; border-radius:4px; background:{{ $pillar->color }}; border:1px solid #ddd;"></span>
                                <span>{{ $pillar->color }}</span>
                            </div>
                        </td>

                        <td>{{ $pillar->needed_value }}</td>

                        <td style="text-align:right; white-space:nowrap;">
                            <a href="{{ route('cms.pillars.edit', $pillar) }}" class="btn btn-sm btn-outline-secondary">
                                Aanpassen
                            </a>

                            <form action="{{ route('cms.pillars.destroy', $pillar) }}"
                                  method="POST"
                                  style="display:inline-block;"
                                  onsubmit="return confirm('Weet je zeker dat je deze pijler wilt verwijderen?');">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-sm btn-outline-danger">
                                    Verwijderen
                                </button>
                            </form>
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="7" style="padding:24px; color:#666;">
                            Geen pijlers gevonden.
                        </td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
</div>

@endsection
